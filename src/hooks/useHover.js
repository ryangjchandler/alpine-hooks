export default function useHover(Alpine) {
    Alpine.magic('useHover', (el, { interceptor }) => {
        return interceptor((initialValue, getter, setter, path, key) => {
            const element = initialValue;
            
            setter(false);

            element.addEventListener('mouseover', () => {
                setter(true);
            })
    
            element.addEventListener('mouseout', () => {
                setter(false);
            })

            return getter();
        })
    })
};