# redux-for-noobs
A simplified store thing written by a noob for noobs.

# Install
`npm i redux-for-noobs`

# Usage

`Store.jsx`
```jsx
import React from 'react'
import { Provider, simpleStore, OPTIONS } from 'redux-for-noobs'

const store = simpleStore({
  testCount: 0,
  something: false,
  else: {}
}, [ 
  OPTIONS.STRICT_TYPES, // optional - forces any changes to `testCount` to be the type of the default value set
  OPTIONS.STRICT_NAMING // optional - removes anything that is not `A-z_-` from store names
])

const Store = ({ children }) => (
	<Provider store={store}>
		{children}
	</Provider>
)

export default Store
```

`ExampleView.jsx`
```jsx
import React from 'react'
import Store from './Store'

import { useStore } from 'redux-for-noobs'


const ExampleView = () => {

	const { testCount, setTestCount } = useStore()

	return (
        <Store>
            count is {testCount}
  
			<button onClick={() => setTestCount(testCount + 1)}>
				increment testCount by 1
			</button>
		</Store>
	)
}

export default ExampleView

```

# Profit
*No more reducers and no more actions, just set and go!*

_Not actually sure if this is useful in anyway or effective, but I like it..._
