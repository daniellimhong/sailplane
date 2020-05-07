
const INITIAL_STATE = {
  fs: {
    '/r': { type: 'dir' },
    '/r/dir1': { type: 'dir' },
    '/r/file1': { type: 'file' },
    '/r/dir2': { type: 'dir' },
    '/r/dir2/file2': { type: 'dir' },
    '/r/dir2/file3': { type: 'file' }
  }
}

const reducer = (state = INITIAL_STATE, { type, payload }) => {
  return state
}

export default reducer
