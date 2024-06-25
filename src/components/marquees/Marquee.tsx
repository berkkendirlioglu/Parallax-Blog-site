import './marquee.scss'

const Marquee = ({text}:{text:string}) => {
  return (
    <>
      <div className="overlay-container">
        <div className="overlay">
            <div className="item item1">{text}</div>
            <div className="item item2">·</div>
            <div className="item item3">{text}</div>
            <div className="item item4">·</div>
            <div className="item item5">{text}</div>
            <div className="item item6">·</div>
            <div className="item item7">{text}</div>
            <div className="item item8">·</div>
            <div className="item item9">{text}</div>
            <div className="item item10">·</div>
            <div className="item item11">{text}</div>
            <div className="item item12">·</div>
            <div className="item item13">{text}</div>
            <div className="item item14">·</div>
            <div className="item item15">{text}</div>
            <div className="item item16">·</div>
        </div>
        <div className="rev-overlay">
            <div className="rev-item rev-item1">{text}</div>
            <div className="rev-item rev-item2">·</div>
            <div className="rev-item rev-item3">{text}</div>
            <div className="rev-item rev-item4">·</div>
            <div className="rev-item rev-item5">{text}</div>
            <div className="rev-item rev-item6">·</div>
            <div className="rev-item rev-item7">{text}</div>
            <div className="rev-item rev-item8">·</div>
            <div className="rev-item rev-item9">{text}</div>
            <div className="rev-item rev-item10">·</div>
            <div className="rev-item rev-item11">{text}</div>
            <div className="rev-item rev-item12">·</div>
            <div className="rev-item rev-item13">{text}</div>
            <div className="rev-item rev-item14">·</div>
            <div className="rev-item rev-item15">{text}</div>
            <div className="rev-item rev-item16">·</div>
        </div>
      </div>

    </>
  )
}

export default Marquee
