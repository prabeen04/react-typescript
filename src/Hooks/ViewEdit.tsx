import * as React from 'react'

export default function ViewEdit() {
    const [viewType, setViewType] = React.useState<string>('view')
    function toggleViewType(): void {
        if (viewType === 'view') {
            setViewType('edit')
        } else {
            setViewType('view')
        }
    }
    return { viewType, toggleViewType }
}
