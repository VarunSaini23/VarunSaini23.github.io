import React, { Component } from "react";
import Heading from "../../UI/Heading/Heading";
import styles from "./Experience.module.css";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Fade from "react-reveal";

const EXPERINCES = [
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.\n It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ",
  "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?",
  "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
  "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.",
  "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc",
];

class Experience extends Component {
  selectExperience = (id) => {
    console.log(id);
  };

  constructor(props) {
    super(props);
    this.listItemRef = React.createRef();
  }

  state = {
    experienceIdx: 0,
    expBool: true,
    experiences: [
      "Eventgraphia",
      "DRDO",
      "DSC-VIT",
      "FOSSASIA (Open Source)",
      "JP Morgan Virtual Internship",
    ],
    sliderTopValue: 0,
    listItemHeight: 48.8,
  };

  changeExperienceIndex = (id) => {
    this.setState({ experienceIdx: id, expBool: false });
    this.setState({ sliderTopValue: id * 48.8 });
    console.log(id + " " + this.state.experienceIdx);
  };

  componentDidMount = () => {
    const listStyle = getComputedStyle(this.listItemRef.current);
    console.log("Height", listStyle.height);
    this.setState({
      listItemHeight: listStyle.height + 20,
    });
  };

  render() {
    const listItems = this.state.experiences.map((item, idx) => {
      return (
        <CSSTransition
          key={idx}
          in={this.state.expBool || this.state.experienceIdx === idx}
          // mountOnEnter
          // unmountOnExit
          classNames="fade"
          timeout={500}
          // appear
        >
          <div
            ref={this.listItemRef}
            className={styles.ListItem}
            onClick={() => this.changeExperienceIndex(idx)}
          >
            {item}
          </div>
        </CSSTransition>
      );
    });

    return (
      <div ref={this.props.experienceRef} className={styles.Experience}>
        <Fade bottom>
          <Heading>3. Work Experience</Heading>
          <div className={styles.Splitter}>
            <span
              style={{
                top: this.state.sliderTopValue + "px",
                height: this.state.listItemHeight + "px",
              }}
              className={styles.Slider}
            ></span>
            <div className={styles.Left}>
              <div>{listItems}</div>
            </div>
            <div className={styles.Right}>
              <p>{EXPERINCES[this.state.experienceIdx]}</p>
            </div>
          </div>
        </Fade>
      </div>
    );
  }
}

export default Experience;
