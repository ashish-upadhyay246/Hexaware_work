import React from 'react'
import {
    CardMeta,
    CardHeader,
    CardDescription,
    CardContent,
    Card,
    Icon,
    Image,
} from 'semantic-ui-react'

const Pcard = (props) => (
    <Card>
        <Image src={props.image} wrapped ui={false} />
        <CardContent>
            <CardHeader>{props.id}</CardHeader>
            <CardMeta>
                <span className='date'>{props.price}</span>
            </CardMeta>
            <CardDescription>
                {props.description}
            </CardDescription>
        </CardContent>

    </Card>
)

export default Pcard