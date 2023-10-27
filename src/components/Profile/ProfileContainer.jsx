import React from "react";
import s from './Profile.module.css';
import Profile from "./Profile";
import { setUserProfile } from '../../redux/profile-reducer'
import axios from "axios";
import { connect } from "react-redux";
// import {withRouter} from 'react-router-dom'
import {
    useLocation,
    useNavigate,
    useParams,
} from "react-router-dom";
function withRouter(Component) {
  function ComponentWithRouterProp(props) {
      let location = useLocation();
      let navigate = useNavigate();
      let params = useParams();
      return (
          <Component
              {...props}
              router={{ location, navigate, params }}
          />
      );
  }

  return ComponentWithRouterProp;
}
class ProfileContainer extends React.Component {

  componentDidMount(){
    let userId = this.props.router.params.userId
    if (!userId) {
      userId = 2;
    }
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/`+ userId)
    .then(response => {
      // this.props.toggleIsFetching(false)
      this.props.setUserProfile(response.data)
      // this.props.setTotalUsersCount(response.data.totalCount)
    })
  }

  render() {
    return (
      <div className={s.profile}>
        <Profile {...this.props} profile={this.props.profile} />
      </div>
    )
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile
})

// let WithUrlDataContainerComponent = withRouter(ProfileContainer)
export default connect(mapStateToProps, {setUserProfile})(withRouter(ProfileContainer) );