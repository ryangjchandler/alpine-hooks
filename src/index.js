import useHover from './hooks/useHover'
import useFocus from './hooks/useFocus'

export default function (Alpine) {
    Alpine.plugin(useHover);
    Alpine.plugin(useFocus);
};

export { useHover, useFocus };