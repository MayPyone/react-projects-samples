import TabContainer from './tabContainer'
import './tab.css'
export default function TotalTab(){
    const total = [
        {
            label: 'Tab1',
            content: 'This is Tab1',
        },

        {
            label: 'Tab2',
            content: 'This is Tab2',
        },

        {
            label: 'Tab3',
            content: 'This is Tab3',
        },
    ]
    return(
            <TabContainer totalTabs={total}/>
    )
}