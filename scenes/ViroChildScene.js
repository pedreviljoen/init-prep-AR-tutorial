// Library Imports
'use strict'
import React, { Component } from 'react'
import { ViroARScene, ViroText } from 'react-viro'
//import colors
import colors from '../config/colors'

export default class ViroChildScene extends Component {

  constructor() {
    super();
    this.state = { 
    }
  }

  render() {

    return (
      <ViroARScene>
        {/**
        * TODO:
        * Add a ViroText component that displays the counter variable passed through with the viroAppProps. The Text object should also use
        * its onClick prop to trigger a function passed through from the ViroParentScene, that increments both the count variables. The following 
        * props will have to be set on the Text object: https://docs.viromedia.com/docs/virotext2
        *   - text=
            - onClick=
            - position=
            - scale=
            - style=
            - extrusionDepth=
            - width=
            - height=
        *
        * see the ViroReact documentation for info on rendering ViroText: 
        */ }
      </ViroARScene>
    )
  }

}

module.exports = ViroChildScene