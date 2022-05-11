import React from "react";
import {DayType, SubjectType} from "../../../utils/types";
import DayStore from "../../../stores/Diary/DayStore";
import {Button, Col, Input, Row, Table, Typography} from "antd";
import {observer} from "mobx-react";

interface DayComponentProps {
    day: DayType,
    dayStore?: DayStore
}

@observer
class DayComponent extends React.Component<DayComponentProps> {
    render() {
        const {day, dayStore} = this.props;

        return (
            <>
                <Row>
                    <Col>
                        <Table dataSource={day.subjects}>
                            <Table.Column key={'title'} dataIndex={'title'} title={'Предмет'}
                                          render={(_, record: SubjectType, index) => (
                                              day.name === dayStore?.editSelection.day?.name && dayStore.editSelection.edit ?
                                                  <Input value={record.title}
                                                         onChange={
                                                             (e) => dayStore?.onEditSubjectTitle(e, index)
                                                         }
                                                  /> :

                                                  <Typography.Text>{record.title}</Typography.Text>
                                          )}
                            />
                        </Table>
                        <Button onClick={(e) => dayStore?.onClickEdit(e, day)}>Edit</Button>
                    </Col>
                </Row>
            </>
        );
    }
}

export default DayComponent;