export default function useFocus(Alpine) {
    Alpine.magic('useFocus', (el, { interceptor }) => {
        return interceptor((initialValue, getter, setter, path, key) => {
            const element = initialValue;
            
            setter(false);

            element.addEventListener('focus', () => {
                setter(true);
            })
    
            element.addEventListener('blur', () => {
                setter(false);
            })

            return getter();
        })
    })
};