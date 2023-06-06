import useHover from './hooks/useHover'
import useFocus from './hooks/useFocus'
import useHash from './hooks/useHash'

export default function (Alpine) {
    Alpine.plugin(useHover);
    Alpine.plugin(useFocus);
    Alpine.plugin(useHash);
};

export { useHover, useFocus, useHash };