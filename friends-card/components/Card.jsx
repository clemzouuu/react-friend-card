export default function Card (props) {

    let sentence 
    if (props.item.personnality.kind){
        sentence = "Don't worry, he is kind."
    } else {
        sentence = "He is not kind at all ..."
    }

    let secondSentence

    if(props.item.isMortal){
        secondSentence = "Unfortunately, he is not immortal...He'll leave me one day"
    } else {
        secondSentence = "He is immortal. So be prepared."
    }

      return (
        <div className="card">
          <img
            src={`../images/${props.item.picture}`}
            className="card-picture"
          />
          <p>
            This is {props.item.name}, or {props.item.nickname} if you are a
            relative.
          </p>
          <p>{sentence}</p>
          <p>
            What makes him particular ? {props.item.personnality.power}
            obviously...
          </p>
          <p>He loves {props.item.personnality.likes}.</p>
          <p>Unfortunately, he hates {props.item.personnality.doesntLike}.</p>
          <p>His problems is that he {props.item.personnality.problem}.</p>
          <p>I met him {props.item.met}, how glamorous ...</p>
          <p>{secondSentence}</p>
        </div>
      )
}