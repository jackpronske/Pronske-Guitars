import { useSearchParams } from "react-router-dom";

export function useFilters() {
    const [params, setParams] = useSearchParams();

    const get = (key, fallback = '') => params.get(key) || fallback;

    const set = (updates) => {
        setParams((p) => {
            Object.entries(updates).forEach(([k, v]) => {
                if (!v) p.delete(k);
                else p.set(k, v);
            });
            return p;
        });
    };

    return {
        page: Number(get('page', 1)),
        limit: Number(get('limit', 20)),
        tier: get('tier'),
        wood: get('wood'),
        tag: get('tag'),
        set,
    };
};