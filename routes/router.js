import express from 'express';
import userRoutes from './user.routes.js';
import airlineRoutes from './airline.routes.js';
import invoiceRoutes from './invoice.routes.js';
import invoicerRoutes from './invoicer.routes.js';
import providerRoutes from './provider.routes.js';
import paymentTypeRoutes from './paymentType.routes.js';
import reservationRoutes from './reservation.routes.js';
import auth from './auth.routes.js';


export default [userRoutes, auth, reservationRoutes, paymentTypeRoutes,invoicerRoutes, providerRoutes, airlineRoutes, invoiceRoutes]