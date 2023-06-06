import useHover from './hooks/useHover'
import useFocus from './hooks/useFocus'
import useHash from './hooks/useHash'
import useWindowSize from './hooks/useWindowSize'

export default function (Alpine) {
    Alpine.plugin(useHover);
    Alpine.plugin(useFocus);
    Alpine.plugin(useHash);
    Alpine.plugin(useWindowSize);
};

export { useHover, useFocus, useHash, useWindowSize };