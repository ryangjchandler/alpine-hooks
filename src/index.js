import useHover from './hooks/useHover'

export default function (Alpine) {
    Alpine.plugin(useHover);
};

export { useHover };