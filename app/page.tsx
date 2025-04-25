"use client"
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaInstagram } from "react-icons/fa6";
import Link from "next/link";

export default function Home() {
	const [isVisible, setIsVisible] = useState(false);
	
	useEffect(() => {
		setIsVisible(true);
	}, []);
	
	return (
		<main className="flex flex-col items-center justify-center min-h-screen font-[family-name:var(--font-geist-sans)] relative overflow-hidden">
			{/* Vidéo d'arrière-plan */}
			<div className="absolute inset-0 w-full h-full z-0">
				<video 
					className="object-cover w-[100dvw] h-[100dvh] filter grayscale"
					autoPlay
					loop
					muted
					playsInline
				>
					<source src="/video.mp4" type="video/mp4" />
				</video>
				{/* Overlay pour assombrir légèrement la vidéo */}
				<div className="absolute inset-0 bg-black/40 z-10"></div>
			</div>
			
			{/* Contenu principal */}
			<div className="relative z-20 flex flex-col items-center justify-center w-full max-w-xl mx-auto text-center px-4">
				<div className="relative w-[120px] h-[120px] mb-6">
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: isVisible ? 1 : 0 }}
						transition={{ duration: 1.2, ease: "easeOut" }}
						className="absolute inset-0"
					>
						<svg viewBox="0 0 1043 1043" className="w-full h-full">
							<path
								fill="#F4F4F4"
								d="M573.886597,572.956665 
									C573.924438,533.382385 573.970642,493.808075 573.997192,454.233765 
									C574.016113,426.131317 574.008484,398.028839 574.547729,369.463196 
									C605.908264,369.000000 636.733826,368.999115 667.559326,369.000671 
									C674.995056,369.001038 674.999268,369.004700 674.999329,376.410095 
									C675.000183,477.217865 674.999756,578.025635 674.999695,678.833374 
									C673.338562,678.888855 671.677429,678.992859 670.016296,678.992981 
									C570.425354,679.000793 470.834320,678.960388 371.243591,679.114014 
									C366.137329,679.121887 364.881500,677.721130 364.889099,672.695923 
									C365.041687,571.772949 365.008514,470.849640 365.547791,369.463196 
									C397.221039,369.000000 428.359283,368.999237 459.497498,369.000610 
									C466.994415,369.000946 466.999115,369.004272 466.999268,376.339417 
									C467.000519,441.446594 467.052460,506.553894 466.894562,571.660706 
									C466.882690,576.558411 467.892609,578.179565 473.155762,578.134277 
									C504.624664,577.863281 536.097107,578.001160 567.568359,577.996033 
									C568.899170,577.995789 570.351196,578.268494 571.534424,577.834900 
									C573.692017,577.044006 576.144714,576.031921 573.886597,572.956665"
							/>
						</svg>
					</motion.div>
					<motion.div
						initial={{ opacity: 0, x: -40 }}
						animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -40 }}
						transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
						className="absolute inset-0"
					>
						<svg viewBox="0 0 1043 1043" className="w-full h-full">
							<path
								fill="#F4F4F4"
								d="M341.000000,835.000000 
									C296.858734,835.000000 253.217484,835.000000 209.288300,835.000000 
									C209.288300,626.379456 209.288300,417.984802 209.288300,209.295013 
									C243.947052,209.295013 278.683319,209.295013 313.817505,209.295013 
									C313.817505,382.618927 313.817505,556.015503 313.817505,729.814819 
									C400.947083,729.814819 487.681396,729.814819 574.707520,729.814819 
									C574.707520,764.952148 574.707520,799.688416 574.707520,835.000000 
									C497.015442,835.000000 419.257721,835.000000 341.000000,835.000000"
							/>
						</svg>
					</motion.div>
					<motion.div
						initial={{ opacity: 0, x: 40 }}
						animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 40 }}
						transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
						className="absolute inset-0"
					>
						<svg viewBox="0 0 1043 1043" className="w-full h-full">
							<path
								fill="#F4F4F4"
								d="M730.000000,484.000000 
									C730.000000,427.192688 730.000000,370.885376 730.000000,314.175293 
									C643.376343,314.175293 556.975342,314.175293 470.287537,314.175293 
									C470.287537,279.037903 470.287537,244.301682 470.287537,209.282349 
									C591.636230,209.282349 713.034851,209.282349 834.716858,209.282349 
									C834.716858,417.630859 834.716858,626.025452 834.716858,834.710083 
									C800.042664,834.710083 765.306458,834.710083 730.000000,834.710083 
									C730.000000,718.011658 730.000000,601.255859 730.000000,484.000000"
							/>
						</svg>
					</motion.div>
				</div>
				
				{/* Texte - Fade in depuis le bas */}
				<motion.h1 
					className="text-4xl font-bold uppercase tracking-widest text-center mt-4 text-white"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
					transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
				>
					Lucette Surfwear
				</motion.h1>
				
				<motion.p 
					className="text-center text-xl font-light uppercase tracking-widest text-white mt-2"
					initial={{ opacity: 0, y: 15 }}
					animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 15 }}
					transition={{ duration: 0.8, delay: 1.8, ease: "easeOut" }}
				>
					boutique en ligne bientôt disponible
				</motion.p>
				<motion.div
					className="flex flex-col items-center justify-center text-center text-sm uppercase tracking-widest font-light mt-12 text-white"
					initial={{ opacity: 0, y: 15 }}
					animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 15 }}
					transition={{ duration: 0.8, delay: 2.4, ease: "easeOut" }}
				>
					<p>En attendant, retrouvez-nous sur instagram :</p>
					<Link href="https://www.instagram.com/lucette_surfwear/" target="_blank" className="opacity-70 hover:opacity-100 transition-opacity duration-300 cursor-pointer h-16 w-16 flex items-center justify-center mt-2">
						<FaInstagram size={32} />
					</Link>
				</motion.div>
			</div>
			<footer className="absolute bottom-0 left-0 right-0 text-center text-xs font-light uppercase tracking-widest opacity-50 text-white z-20 pb-4">
				Lucette Surfwear - {new Date().getFullYear()}
			</footer>
		</main>
	);
}
