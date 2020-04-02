import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { Button } from "@material-ui/core";

export default function Tabela(props) {
  const { columns, content, onremove } = props; //propriedade implicida que armazena as propriedades co componente

  return (
    <Table>
      <TableHead>
        <TableRow>
          {columns.map(({ title }) => (
            <TableCell key={title}>{title}</TableCell>
          ))}
          <RemoveTitle removeCb={onremove} />
        </TableRow>
      </TableHead>

      <TableBody>
        {content.map(item => (
          <TableRow key={item.id}>
            {columns.map(({ prop }, index) => (
              <TableCell key={index}>{item[prop]}</TableCell>
            ))}

            <RemoveCell content_id={item.id} removeCb={onremove} />
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

const RemoveTitle = ({ removeCb }) =>
  (removeCb && <TableCell>Remover</TableCell>) || null;

const RemoveCell = ({ removeCb, content_id }) =>
  (removeCb && (
    <TableCell>
      <Button
        variant="contained"
        color="primary"
        onClick={() => removeCb(content_id)}
      >
        Remover
      </Button>
    </TableCell>
  )) ||
  null;
