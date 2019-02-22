import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";

import { connect } from "react-redux";
import ReactDOM from "react-dom";
import { createStore } from "redux";
//import Redux from "redux";

const questions = [
  {
    id: 1,
    text: "Favorite color",
    answers: [
      {
        id: 1,
        text: "Red",
        responses: 10
      },
      {
        id: 2,
        text: "Green",
        responses: 20
      },
      {
        id: 3,
        text: "Blue",
        responses: 5
      }
    ]
  },
  {
    id: 2,
    text: "Favorite animal",
    answers: [
      {
        id: 1,
        text: "Dog",
        responses: 150
      },
      {
        id: 2,
        text: "Cat",
        responses: 100
      },
      {
        id: 3,
        text: "Bird",
        responses: 17
      }
    ]
  }
];

const questionReducer = (currentState = questions, action) => {
  switch (action.type) {
    case "VOTE":
      const { questionId, answerId } = action;
      return currentState.map((question, qid) => {
        if (qid === questionId) {
          let answers = question.answers.map((answer, aid) => {
            if (aid === answerId) {
              return {
                ...answer,
                responses: answer.responses + 1
              };
            }
            return {
              ...answer
            };
          });
          return {
            ...question,
            answers
          };
        }
        return {
          ...question,
          answers: [...question.answers]
        };
      });
    default:
      return currentState; // Always return the state
  }
};

// Action Creators:

const doVote = (questionId, answerId) => {
  return {
    type: "VOTE",
    questionId,
    answerId
  };
};

// Create Store
const store = createStore(questionReducer);

const Result = ({ question, answerId }) => (
  <div>
    <div>
      <h5>You selected:{question.answers[answerId].text}</h5>
    </div>
    <div>
      {question.answers.map((item, index) => (
        <div key={index}> {item.text + ":  " + item.responses} </div>
      ))}
    </div>
  </div>
);

class VoteForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      disabled: false,
      answerid: null
    };
  }

  handleClick = e => {
    this.setState({
      answerId: +e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    const { question, questionId, handleVote, setResult } = this.props;
    const { answerId } = this.state;
    handleVote(questionId, answerId);
    setResult(answerId);
    this.setState({
      disabled: true
    });
  };

  render() {
    const { question } = this.props;
    return (
      <div>
        <h3>{question.text}</h3>
        <form onSubmit={this.onSubmit}>
          {question.answers.map((item, index) => (
            <label key={index}>
              <input
                type="radio"
                name="answser"
                onClick={this.handleClick}
                value={index}
              />
              {item.text}
            </label>
          ))}
          <div className="mt">
            <input type="submit" value="Submit" disabled={this.disabled} />
          </div>
        </form>
      </div>
    );
  }
}

const getRandomId = max => {
  return Math.floor(Math.random() * Math.floor(max));
};

class VotePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false,
      questionId: getRandomId(props.questions.length),
      answerid: null
    };
  }

  setResult = aid => {
    this.toggle = true;
    this.answerId = aid;
  };

  render() {
    const { questions } = this.props;
    const { questionId, answerId } = this.state;
    return (
      <div>
        {this.toggle ? (
          <Result question={questions[questionId]} answerId={this.answerId} />
        ) : null}
        <VoteForm
          question={questions[questionId]}
          questionId={questionId}
          handleVote={this.props.handleVote}
          setResult={this.setResult}
        />
      </div>
    );
  }
}

// Map state and dispatch to props
const mapStateToProps = state => ({
  questions: state
});

const mapDispatchToProps = dispatch => ({
  handleVote: (qid, aid) => {
    dispatch(doVote(qid, aid));
  }
});

const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(VotePage);

// Render to DOM

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
