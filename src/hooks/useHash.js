export default function useHash(Alpine) {
    Alpine.magic('useHash', (el, { interceptor, effect }) => {
        return interceptor((initialValue, getter, setter, path, key) => {            
            if (window.location.hash === '') {
                window.location.hash = initialValue;
            }

            const initial = window.location.hash || initialValue;

            setter(initial);

            window.addEventListener('hashchange', () => {
                setter(window.location.hash);
            })

            effect(() => {
                let hash = getter();

                window.location.hash = hash;

                setter(hash)
            })
            
            return initial;
        })
    })
};