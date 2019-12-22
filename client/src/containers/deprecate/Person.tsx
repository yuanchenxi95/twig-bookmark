import React, { ReactElement } from 'react';
import { useObserver, useLocalStore } from 'mobx-react'; // 6.x or mobx-react-lite@1.4.0

export function Person(): ReactElement {
    const person = useLocalStore(() => ({ name: 'John' }));
    return useObserver(() => (
        <div>
            {person.name}
            <button
                onClick={(): void => {
                    person.name = 'Mike';
                }}
            >
                No! I am Mike
            </button>
        </div>
    ));
}
