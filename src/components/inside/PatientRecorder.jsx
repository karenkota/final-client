import React, {Component} from 'react';
import ReactJsSearchBox from 'reactjs-search-box';

const PatientRecorder = () => {
  return (
    <div>
      <ReactJsSearchBox ref={ref => this.reactJsSearchBox = ref}
      options={{ label: '', placeHolder: 'search' }} />
    </div>
  )
}

export default PatientRecorder;