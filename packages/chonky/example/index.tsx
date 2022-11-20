// import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { FullFileBrowser, ChonkyActions, setChonkyDefaults } from '../src';
import { ChonkyIconFA } from '../../chonky-icon-fontawesome/src';
import data from './data';

setChonkyDefaults({ iconComponent: ChonkyIconFA });

const App = () => {
  return (
    <div style={{ height: 400 }}>
      <FullFileBrowser
        files={data}
        defaultFileViewActionId={ChonkyActions.EnableListView.id}
        fileListStyle={{ height: 70, width: 182, gridHeight: 150 }}
        activeStar={<div>active Start</div>}
        deactivateStar={<div>deactivate Start</div>}
        tags={<div>Good</div>}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
