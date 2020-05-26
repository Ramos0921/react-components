var App = ()=>(
  <div>
    <h2>Grocery List</h2>
    <GroceryList list ={['beer','whiskey','steak','toilet paper','bacon']}/>
  </div>
);

class GroceryListItem extends React.Component{

    constructor(props) {
      super(props);


      // this.state = {
      //   done: false
      // };
      this.state = {
        check: false
      };

    };
    onListItemClick() {
      this.setState({
        check: !this.state.check
      });
    }

    // onListenItemClick(){
    //   this.setState({
    //     done: !this.state.done
    //   })
    // };

    render(){
      let style = {'font-weight': this.state.check ? 'bold' : 'normal' };
      return (
      <li style ={style} onClick={this.onListItemClick.bind(this)}>{this.props.list}</li>
      );
    };
};

var GroceryList = (props)=>(
  <ul>
    {props.list.map(item =>
      <GroceryListItem list ={item} />
      )}
  </ul>
);


ReactDOM.render(<App/>, document.getElementById('app'));