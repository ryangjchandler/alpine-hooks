export default function useWindowSize(Alpine) {
    Alpine.magic('useWindowSize', () => {
        return () => {
            const size = Alpine.reactive({
                width: window.innerWidth,
                height: window.innerHeight
            })

            window.addEventListener('resize', () => {
                size.width = window.innerWidth;
                size.height = window.innerHeight;
            })

            return size
        }
    })
};