import { app, HttpRequest, HttpResponseInit, InvocationContext } from "@azure/functions";

// import {send, setApiKey} from '@sendgrid/mail';

export async function SendEmail(request: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> {
    context.log(`Http function processed request for url "${request.url}"`);

    const sgMail = require('@sendgrid/mail');

    const name = request.query.get('name') || await request.text() || 'world';

    return { body: `Hello, ${name}!` };
};

app.http('SendEmail', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: SendEmail
});
