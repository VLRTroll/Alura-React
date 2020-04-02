import React from "react";
import Header from "../../components/Header";
import { Typography, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

export default function Sobre() {
  const styles = useStyles();

  return (
    <>
      <Header />

      <Container maxWidth="md">
        <Typography component="h2" variant="h1" className={styles.title}>
          Sobre
        </Typography>

        <Typography component="p" variant="body1">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel quia
          quaerat laboriosam assumenda. Ipsam sed id earum harum ratione
          repellat itaque dolorem fugiat voluptate! Perferendis, necessitatibus?
          Autem odit aspernatur quo?
        </Typography>
      </Container>
    </>
  );
}

const useStyles = makeStyles({
  title: {
    textAlign: "center",
    color: "black"
  }
});
