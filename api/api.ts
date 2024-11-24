import type {PickFrom, KeysOf} from "#app/composables/asyncData";
import type { UseFetchOptions, AsyncData } from "#app";
import type {$Fetch} from "nitropack";
import {FetchError} from "ofetch";

export class apiService {
    private baseUrl: string;
    private baseHeaders: Record<string, string>;
    private fetchInstance : $Fetch

    constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
        this.baseHeaders = {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        };
        this.fetchInstance = $fetch.create({
            baseURL: this.baseUrl,
            headers: this.baseHeaders
        });
    }

    public  get<T>(endpoint: string, options?: UseFetchOptions<T>):AsyncData<PickFrom<T, KeysOf<T>> | null, FetchError<any> | null> {
        return useFetch(endpoint, {
            method: 'GET',
            ...options,
            $fetch:  this.fetchInstance
        })
    }
}