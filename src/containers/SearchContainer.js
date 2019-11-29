import { connect } from 'react-redux';
import Search from '../components/search/Search';
import { fetchData } from '../actions';

const mapStateToProps = (state, props) => {
  return {
    images: state.images
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    fetchData: (searchText, amount) => {
      dispatch(fetchData(searchText, amount));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);