import BubbleGum from '../assets/hero/bubble_gum.svg';
import Statue from '../assets/hero/Davi.png';
import RayBan from '../assets/hero/rayban.png';
import Eyes from '../assets/hero/scared-eyes.svg';

function Animation() {
	return (
		<div className="relative w-[70%] md:w-1/2 lg:w-[30%] mt-[-16%] lg:mt-[-12%]">
			<img
				src={Statue}
				alt="busto da estátua de David de Michelangelo usando óculos Ray-Ban, mascando chiclete. O chiclete estoura e ele se assusta."
				className="mask-r-from-95% mask-b-from-95%"
			/>
			<img
				src={Eyes}
				alt=""
				className="absolute left-[42%] top-[23.9%] w-[38.1%] animate-scared-eyes"
			/>
			<img
				src={RayBan}
				alt=""
				className="absolute left-[26.6%] top-[9.8%] w-[78.4%] mix-blend-multiply animate-sunglasses"
			/>
			<img
				src={BubbleGum}
				alt=""
				className="absolute left-[46.6%] top-[47.8%] w-[45.4%] origin-[38%_8%] animate-bubbaloo"
			/>
		</div>
	);
}

export default Animation;
