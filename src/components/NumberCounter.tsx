"use client";
import {
	KeyframeOptions,
	animate,
	useInView,
	useIsomorphicLayoutEffect,
} from "framer-motion";
import { useRef } from "react";

type NumberCounterProps = {
	from: number;
	to: number;
	animationOptions?: KeyframeOptions;
};

export default function NumberCounter(props: NumberCounterProps) {
	const ref = useRef<HTMLSpanElement>(null);
	const inView = useInView(ref, { once: true });

	useIsomorphicLayoutEffect(() => {
		const element = ref.current;
		if (!element) return;
        if (!inView) return;

		const controls = animate(props.from, props.to, {
			duration: 1.5,
			ease: "easeInOut",
			...props.animationOptions,
			onUpdate(value) {
				element.textContent = String(Math.floor(value));
			},
		});

		return controls.stop;
	}, [props.from, props.to, props.animationOptions, inView, ref]);

	return <span ref={ref} />;
}
