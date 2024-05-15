import {CodeOrg, BlockWorkspace, Header, Output} from 'libprotolab/layout/CodeOrg'
import {blocklyOptions} from './blocks'
import {save, load, run} from 'libprotolab/blockly/workspace'

export const LAB_NAME = "Protolab"

const Toolbar = () =>
  <div style={{
    display: 'flex',
    justifyContent: 'flex-end',
    gap: 4,
  }}>
    <button onClick={() => run()}>Run</button>
    <button>Reset</button>
    <button onClick={() => save()}>Save</button>
    <button onClick={() => load()}>Load</button>
  </div>

export const Lab = () =>
  <CodeOrg
    header={<Header toolbar=<Toolbar/> />}
    workspace={<BlockWorkspace blocklyOptions={blocklyOptions} />}
    output={<Output />}
  />