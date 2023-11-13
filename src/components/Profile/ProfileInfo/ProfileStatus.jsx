import React from "react";
import s from './ProfileInfo.module.scss';
import {TextField} from "@mui/material";

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    status: this.props.status
  }

  activateEditMode = () => {
    this.setState({editMode: true})
  }

  deactivateEditMode = () => {
    this.setState({editMode: false})
    this.props.updateStatus(this.state.status);
  }

  onStatusChange = (e) => {
    this.setState ({
      status: e.currentTarget.value
    })
  }
  
  render() {
    return (
      <div>
        {!this.state.editMode && <div>
          <span onDoubleClick={this.activateEditMode}>{this.props.status || '-----'}</span>
        </div>
}
        {this.state.editMode && <div>
          <TextField
            className={s.statusInput}
            label="Статуст"
            variant="standard"
            value={this.state.status}
            onBlur={this.deactivateEditMode}
            autoFocus={true}
            ref={this.statusInputRef}
            onChange={this.onStatusChange}
            />
        </div>
}
      </div>
    )
  }
}

export default ProfileStatus;