import BubbleGum from '../assets/hero/bubble_gum.svg';
import Statue from '../assets/hero/Davi.png';
import RayBan from '../assets/hero/rayban.png';

function Animation() {
	return (
		<div className="relative w-1/3">
			<img src={Statue} alt="busto da estátua de David" />
			<img
				src={RayBan}
				alt=""
				className="absolute left-[26.6%] top-[9.8%] w-[78.4%] mix-blend-multiply"
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
