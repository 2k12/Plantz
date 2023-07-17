import {
    Table,
    Header,
    HeaderRow,
    Body,
    Row,
    HeaderCell,
    Cell,
} from "@table-library/react-table-library/table";

function Tablita() {
    return (
        <>
            <Table data={data} theme={theme} layout={{ fixedHeader: true }}>
                {(tableList) => (
                    <>
                        <Header>
                            <HeaderRow>
                                <HeaderCell>Task</HeaderCell>
                                <HeaderCell>Deadline</HeaderCell>
                                <HeaderCell>Type</HeaderCell>
                                <HeaderCell>Complete</HeaderCell>
                                <HeaderCell>Tasks</HeaderCell>
                            </HeaderRow>
                        </Header>

                        <Body>
                            {tableList.map((item) => (
                                <Row key={item.id} item={item}>
                                    <Cell>{item.reino}</Cell>
                                    <Cell>{item.filo}</Cell>
                                    <Cell>{item.familia}</Cell>
                                </Row>
                            ))}
                        </Body>
                    </>
                )}
            </Table>
        </>

    );
}

export default Tablita