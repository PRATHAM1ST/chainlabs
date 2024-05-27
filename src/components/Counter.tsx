"use client";
import { Button } from "@/stories/LiveButton";
import {
	useSpring,
	motion,
	MotionValue,
	useTransform,
} from "framer-motion";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

type CounterProps = {
	count: number;
	setCount: Dispatch<SetStateAction<number>>;
	minValue?: number;
};

export default function Counter(props: CounterProps) {
	const { count, setCount } = props;
	const arrayOfNumbers = Array.from(
		{ length: 11 },
		(_, i) => count - 5 + i + 1
	);
	const animatedValue = useSpring(count);

	function handleIncrement() {
		animatedValue.set(count + 1);
		setCount(count + 1);
	}

	function handleDecrement() {
		if (count === 0 && !props.minValue) return;
		if (props.minValue && count <= props.minValue) return;
		setCount(count - 1);
		animatedValue.set(count - 1);
	}

	useEffect(() => {
		animatedValue.set(count);
	}, [count, animatedValue]);

	return (
		<>
			<Button onClick={handleDecrement} label="-" square />
			<div className="relative overflow-hidden flex flex-col justify-center items-center h-8 w-8">
				{arrayOfNumbers.map((num) => (
					<Count num={num} mv={animatedValue} key={num} />
				))}
			</div>
			<Button onClick={handleIncrement} label="+" square />
		</>
	);
}

function Count({ num, mv }: { num: number; mv: MotionValue }) {
	let y = useTransform(mv, (latestValue) => 24 * (num - latestValue));
	return (
		<motion.span
			style={{ y }}
			key={num}
			className="absolute inset-0 w-8 h-8 text-center leading-8"
		>
			{num}
		</motion.span>
	);
}
