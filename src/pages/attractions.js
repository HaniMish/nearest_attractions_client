import  { Component } from "react";
import { connect } from "react-redux";
import { retrieveAttractions, findAttractionsByTitle, deleteAllAttractions } from "../actions/attractions";

/*const mapStateToProps = (state) => {
    return {
        attractions: state.attractions
    };
  }
  
  export default connect(mapStateToProps, {
    retrieveAttractions,
  })(AttractionsList);*/

class AttractionsList extends Component {
    constructor(props) {
        super(props);
        this.refreshData = this.refreshData.bind(this);
        this.setActiveAttraction = this.setActiveAttraction.bind(this);
        this.state = {
          currentAttraction: null,
          currentIndex: -1,
        };
      }
      componentDidMount() {
        this.props.retrieveAttractions();
      }
      refreshData() {
        this.setState({
          currentAttraction: null,
          currentIndex: -1,
        });
      }
      setActiveAttraction(attraction, index) {
        this.setState({
          currentAttraction: attraction,
          currentIndex: index,
        });
      }
    render() {
        /*const { currentAttraction, currentIndex } = this.state;*/
        const { attractions } = this.props;
        return(
            <div>
            {attractions.attractionsList.map(card => <div>{card.name}</div>)}
            </div>
        );
      }
}
const mapStateToProps = (state) => {
    return {
      attractions: state.attractions,
    };
  };

export default connect(mapStateToProps, { retrieveAttractions })(AttractionsList);

