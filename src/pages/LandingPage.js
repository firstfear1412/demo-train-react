import { useNavigate } from "react-router-dom";
import avatar from "../assets/images/profile.png";
function LandingPage(){
    const navigate = useNavigate();
    const handleToDetail = () => {
        navigate("/details");
      };
    return(
        <div className="text-center font-mono">
            <p className="text-3xl font-bold uppercase text-gray-700">About Me</p>
            <div className=" flex justify-center">
                <img src={avatar} alt="avatar" width={300} className="rounded-full"></img>
            </div>
            <p className="text-2xl font-mono font-bold text-white uppercase">inspiration</p>
            <p className="text-md mt-2 font-bold text-white mx-36">
            When I was a little boy in elementary school, the neighborhood kids and I all looked forward to playing so many games in my backyard during the long summer holidays between grades. For instance, one of our favorite games was whiffle ball, a kid's version of baseball. All we needed was a cheap plastic bat and a cheap plastic ball and we could entertain ourselves in the backyard from morning to afternoon. Or if we broke the bat or lost the ball, we would play "Red Rover, Red Rover." To play this game, we would join hands in two opposing lines and hurl ourselves at the locked wrists of the opposing team, trying to break through their line. Once the sun set, our favorite game was hide-and-seek. My backyard was perfect because there were lots of bushes and trees where we could hide out of sight of the kid who was "it." Even on rainy days, we had fun activities out in the garden shed in the corner of the backyard. For instance, we would often act out our favorite TV game shows, like "Let's Make a Deal," or sing along to the theme song from "The Monkees," a popular TV show about a rock-and-roll band, on my little record player. Even now, fifty years later, I still look back on all those fun summertime games out in my backyard with a lot of fondness.
            </p>
            <br/>
            {/* <a href="/details"> */}
                {/* <button className="text-black underkube" onClick={()=>handleToDetail()} >NEXT</button> */}
                <button className="text-black underkube" onClick={handleToDetail} class="background-color:black" >NEXT</button>
            {/* </a> */}
        </div>
    );
}

export default LandingPage;