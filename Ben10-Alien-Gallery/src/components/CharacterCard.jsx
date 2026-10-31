function CharacterCard(props) {

  return (
<div className="character-card">
<div className="image-box">
<img src={props.image} alt={props.name} />
</div>
 
      <div className="card-content">
<h2>{props.name}</h2>
<p className="power">{props.power}</p>
<p>{props.description}</p>
</div>
</div>

  );

}
 
export default CharacterCard;
 