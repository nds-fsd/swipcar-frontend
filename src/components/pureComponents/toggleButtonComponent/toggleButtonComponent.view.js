import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// import styles from '../pureComponents.module.css';
import stylesToggle from './toggleButtonComponent.module.css';

const ToggleButtonComponent = React.forwardRef((props, ref) => {

  return (
    <div className={stylesToggle._toggle_box}>
      <span className={stylesToggle._label}>{props.label}</span>
      <div className={stylesToggle.switch_container}>
        <label>
          <input className={stylesToggle.switch} {...props} ref={ref} />
          <div>
            <div className={stylesToggle._circle_toggle}>
              {props.iconlabel && (
                <FontAwesomeIcon
                  icon={props.iconlabel}
                  className={`${stylesToggle._icon_label} ${
                    (ref && ref.current.value) && stylesToggle._icon_label_check
                  }`}
                />
              )}
            </div>
          </div>
        </label>
      </div>
    </div>
  );
});

export default ToggleButtonComponent;

/*



class Switch extends React.Component {

    constructor ( props ) {
        super( props );
		
		this.state = {
			isChecked: null
		}
    }
	
	componentWillMount () {
		this.setState( { isChecked: this.props.isChecked } );
	}


    render () {

        return(
            <div className="switch-container">
                <label>
                    <input ref="switch" checked={ this.state.isChecked } onChange={ this._handleChange } className="switch" type="checkbox" />
                    <div>
              
                        <div></div>
                    </div>
                </label>
            </div>
        );
    }


    _handleChange () {
		this.setState( { isChecked: !this.state.isChecked } );
    }

}


 
React.render( <Switch isChecked={ true } />, document.getElementById( "page" ) );


* */
