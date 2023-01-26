# Delivery Backend

I created a delivery **CRUD**, using **Typescript**, **Node**, **Express**, **JWT**, **Prisma** and **Postgres**

*I didn't use tests because it's a small project (bad excuse)*

# Technologies

- **[Typescript](https://www.typescriptlang.org/)**
- **[Node](https://nodejs.org/en/)**
- **[Express](https://expressjs.com/pt-br/)**
- **[JWT](https://jwt.io/)**
- **[Prisma](https://www.prisma.io/)**
- **[Postgres](https://www.postgresql.org/)**

# Run project

install dependencies

```sh
yarn install
```

run

```sh
yarn dev
```

# Routes

### Base server route

**http://localhost:3000**

### Client

<table>
<tbody>
<tr style="height: 23px;">
<td style="height: 23px;">&nbsp;POST</td>
<td style="height: 23px;">&nbsp;/client</td>
<td style="height: 23px;">&nbsp;username (string), password (string)</td>
</tr>
<tr style="height: 23.35px;">
<td style="height: 23.35px;">&nbsp;POST</td>
<td style="height: 23.35px;">&nbsp;/client/authenticate</td>
<td style="height: 23.35px;">&nbsp;username (string), password (string)</td>
</tr>
<tr style="height: 23px;">
<td style="height: 23px;">&nbsp;GET</td>
<td style="height: 23px;">&nbsp;/client/deliveries&nbsp;</td>
<td style="height: 23px;">&nbsp;bearer token</td>
</tr>
</tbody>
</table>

### Deliveryman

<table>
<tbody>
<tr style="height: 23px;">
<td style="height: 23px;">&nbsp;POST</td>
<td style="height: 23px;">&nbsp;/deliveryman</td>
<td style="height: 23px;">&nbsp;username (string), password (string)</td>
</tr>
<tr style="height: 23.35px;">
<td style="height: 23.35px;">&nbsp;POST</td>
<td style="height: 23.35px;">&nbsp;/deliveryman/authenticate</td>
<td style="height: 23.35px;">&nbsp;username (string), password (string)</td>
</tr>
<tr style="height: 23px;">
<td style="height: 23px;">&nbsp;GET</td>
<td style="height: 23px;">&nbsp;/deliveryman/deliveries&nbsp;</td>
<td style="height: 23px;">&nbsp;bearer token</td>
</tr>
</tbody>
</table>

### Deliveries

<table style="width: 126px;">
<tbody>
<tr>
<td style="width: 50.7833px;">&nbsp;POST</td>
<td style="width: 13.2167px;">&nbsp;/delivery</td>
<td style="width: 15px;">&nbsp;item_name (string), client bearer token </td>
</tr>
<tr>
<td style="width: 50.7833px;">&nbsp;GET</td>
<td style="width: 13.2167px;">&nbsp;/delivery/available</td>
<td style="width: 15px;">&nbsp;deliveryman bearer token</td>
</tr>
<tr>
<td style="width: 50.7833px;">&nbsp;PUT</td>
<td style="width: 13.2167px;">&nbsp;/delivery/updateDeliveryman/:deliveryId</td>
<td style="width: 15px;">&nbsp;deliveryman bearer token</td>
</tr>
<tr>
<td style="width: 50.7833px;">&nbsp;PUT</td>
<td style="width: 13.2167px;">&nbsp;/delivery/updateEndDate/:deliveryId</td>
<td style="width: 15px;">&nbsp;deliveryman bearer token</td>
</tr>
</tbody>
</table>
