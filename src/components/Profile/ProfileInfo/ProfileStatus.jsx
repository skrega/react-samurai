import React from "react";
import s from './ProfileInfo.module.scss';
import {TextField} from "@mui/material";

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    title: 'Yo'
  }

  activateEditMode() {
    this.setState({editMode: true})
  }

  deactivateEditMode() {
    this.setState({editMode: false})
  }

  render() {
    return (
      <div>
        {!this.state.editMode && <div>
          <span
            onDoubleClick={this
            .activateEditMode
            .bind(this)}>{this.props.status}</span>
        </div>
}
        {this.state.editMode && <div>
          <TextField
            className={s.statusInput}
            label="Статуст"
            variant="standard"
            value={this.props.status}
            onBlur={ this.deactivateEditMode.bind(this) }
            autoFocus={true}/>
        </div>
}
      </div>
    )
  }
}

export default ProfileStatus;