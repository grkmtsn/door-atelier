import Divider from '../divider'
import Reveal from '../reveal'
import './index.css'

export default function Grid() {
    return (
        <Reveal delay='2000'>
            <Divider />
            <div className="grid-container">
                <div className="grid-box creative">
                    <div className="text">
                        <h2>Creative Play</h2>
                        <p>Activities to stimulate your child's imagination.</p>
                    </div>
                    <div className="image">
                        <img width={190} src="/door.png" alt="Creative Play" />
                    </div>
                </div>
                <div className="grid-box skills">
                    <div className="text">
                        <h2>Motor Skills Development</h2>
                        <p>Hands-on tasks that enhance fine and gross motor skills.</p>
                    </div>
                    <div className="image">
                        <img width={240} src="/gri.png" alt="Motor Skills Development" />
                    </div>
                </div>
                <div className="grid-box art">
                    <div className="text">
                        <h2>Art and Craft</h2>
                        <p>Encouraging artistic expression through fun projects.</p>
                    </div>
                    <div className="image">
                        <img width={300} src="/bus.png" alt="Art and Craft" />
                    </div>
                </div>
                <div className="grid-box parental">
                    <div className="text">
                        <h2>Parental Involvement</h2>
                        <p>
                            Opportunities for parents to engage and support their children's
                            creativity.
                        </p>
                    </div>
                    <div className="image">
                        <img width={300} src="/parent.png" alt="Parental Involvement" />
                    </div>
                </div>
                <div className="grid-box environment">
                    <div className="text">
                        <h2>Safe Environment</h2>
                        <p>Ensuring a secure and welcoming space for all activities.</p>
                    </div>
                    <div className="image">
                        <img width={225} src="/farn.png" alt="Safe Environment" />
                    </div>
                </div>
                <div className="grid-box social">

                    <div className="text">

                        <h2>Social Interaction</h2>
                        <p>Building friendships and social skills in small group settings.</p>
                    </div>
                    <div className="image">
                        <img width={230} src="/social-new.png" alt="Social Interaction" />
                    </div>
                </div>
            </div>
        </Reveal>
    )
}