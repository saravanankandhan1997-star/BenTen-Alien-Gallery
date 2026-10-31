import CharacterCard from "./components/CharacterCard";
import "./App.css";
 
function App() {
  const aliens = [
    {
      id: 1,
      name: "Heatblast",
      power: "Fire Power",
      description: "Heatblast can create and control powerful flames.",
      image:
        "https://www.clipartmax.com/png/middle/250-2503868_heatblast-ben-10-reboot-heatblast.png",
    },
    {
      id: 2,
      name: "Four Arms",
      power: "Super Strength",
      description: "Four Arms has incredible strength and four powerful arms.",
      image:
        "https://www.clipartmax.com/png/middle/146-1468672_fourarms-by-moheart7-ben-10-four-arms.png",
    },
    {
      id: 3,
      name: "Diamondhead",
      power: "Crystal Power",
      description: "Diamondhead can create sharp crystals and strong shields.",
      image:
        "https://www.clipartmax.com/png/middle/442-4422217_ben-10-omni-enhanced-diamondhead-2-by-vampirerichard69-ben-10-omni-enhanced.png"
 
    },
    {
      id: 4,
      name: "Stinkfly",
      power: "Flying Power",
      description: "Stinkfly can fly and shoot sticky slime.",
      image:
        "https://www.clipartmax.com/png/middle/222-2225240_stinkfly-ben-10-alien-stinkfly.png",
    },
    {
      id: 5,
      name: "XLR8",
      power: "Super Speed",
      description: "XLR8 can run at incredible speeds.",
      image:
        "https://www.clipartmax.com/png/middle/274-2741040_ben-10-wikia-xlr8-adventure-film-ben-10-omniverse-clockwork.png"
    },
    {
      id: 6,
      name: "Four Arms",
      power: "Super Strength",
      description: "A powerful alien who can jump high and smash obstacles.",
      image:
        "https://www.clipartmax.com/png/middle/185-1854695_four-arms-ben-ten-red-alien.png",
    },
  ];
 
  return (
<div>
<nav className="navbar">
<h1>
          BEN<span>10</span>
</h1>
<p>ALIEN GALLERY</p>
</nav>
 
      <section className="hero">
<p className="hero-small">THE OMNITRIX COLLECTION</p>
<h1>
          Explore The <span>Alien</span> World
</h1>
<p className="hero-description">
          Discover the amazing aliens and their incredible powers.
          Choose your favourite alien!
</p>
<div className="omnitrix">10</div>
</section>
 
      <section className="gallery-section">
<div className="section-heading">
<p>BEN 10 UNIVERSE</p>
<h2>Meet The Aliens</h2>
<span>Discover the power of every transformation.</span>
</div>
 
        <div className="character-grid">
          {aliens.map(function (alien) {
            return (
<CharacterCard
                key={alien.id}
                name={alien.name}
                power={alien.power}
                description={alien.description}
                image={alien.image}
              />
            );
          })}
</div>
</section>
 
      <footer>
<h2>BEN10 ALIEN GALLERY</h2>
<p>It's Hero Time!</p>
<p className="copyright">Created with React | 2026</p>
</footer>
</div>
  );
}
 
export default App;