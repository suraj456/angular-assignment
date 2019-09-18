export interface To {
    email: string;
    name: string;
    type: string;
}

export interface Headers {
    ['Reply-To']: string;
}

export interface GlobalMergeVar {
    name: string;
    content: string;
}

export interface Var {
    name: string;
    content: string;
}

export interface MergeVar {
    rcpt: string;
    vars: Var[];
}

export interface Metadata {
    website: string;
}

export interface Values {
    user_id: number;
}

export interface RecipientMetadata {
    rcpt: string;
    values: Values;
}

export interface Attachment {
    type: string;
    name: string;
    content: string;
}

export interface Image {
    type: string;
    name: string;
    content: string;
}

export interface Message {
    html: string;
    text: string;
    subject: string;
    from_email: string;
    from_name: string;
    to: To[];
    headers: Headers;
    important: boolean;
    track_opens?: any;
    track_clicks?: any;
    auto_text?: any;
    auto_html?: any;
    inline_css?: any;
    url_strip_qs?: any;
    preserve_recipients?: any;
    view_content_link?: any;
    bcc_address: string;
    tracking_domain?: any;
    signing_domain?: any;
    return_path_domain?: any;
    merge: boolean;
    merge_language: string;
    global_merge_vars: GlobalMergeVar[];
    merge_vars: MergeVar[];
    tags: string[];
    subaccount: string;
    google_analytics_domains: string[];
    google_analytics_campaign: string;
    metadata: Metadata;
    recipient_metadata: RecipientMetadata[];
    attachments: Attachment[];
    images: Image[];
}

export interface iInbox {
    key: string;
    message: Message;
    async: boolean;
    ip_pool: string;
    send_at: string;
}


export const Inbox : iInbox[] = [
    {
        key: 'example key',
        message: {
          html: '<p>Example HTML content</p>',
          text: 'Example text content',
          subject: 'example subject',
          from_email: 'message.from_email@example.com',
          from_name: 'Example Name',
          to: [
            {
              email: 'recipient.email@example.com',
              name: 'Recipient Name',
              type: 'to'
            }
          ],
          headers: {
            'Reply-To': 'message.reply@example.com'
          },
          important: false,
          track_opens: null,
          track_clicks: null,
          auto_text: null,
          auto_html: null,
          inline_css: null,
          url_strip_qs: null,
          preserve_recipients: null,
          view_content_link: null,
          bcc_address: 'message.bcc_address@example.com',
          tracking_domain: null,
          signing_domain: null,
          return_path_domain: null,
          merge: true,
          merge_language: 'mailchimp',
          global_merge_vars: [
            {
              name: 'merge1',
              content: 'merge1 content'
            }
          ],
          merge_vars: [
            {
              rcpt: 'recipient.email1@example.com',
              vars: [
                {
                  name: 'merge2',
                  content: 'merge2 content'
                }
              ]
            }
          ],
          tags: [
            'password-resets'
          ],
          subaccount: 'customer-123',
          google_analytics_domains: [
            'example.com'
          ],
          google_analytics_campaign: 'message.from_email@example.com',
          metadata: {
            website: 'www.example.com'
          },
          recipient_metadata: [
            {
              rcpt: 'recipient.email@example.com',
              values: {
                user_id: 123456
              }
            }
          ],
          attachments: [
            {
              type: 'text/plain',
              name: 'myfile.txt',
              content: 'ZXhhbXBsZSBmaWxl'
            }
          ],
          images: [
            {
              type: 'image/png',
              name: 'IMAGECID',
              content: 'ZXhhbXBsZSBmaWxl'
            }
          ]
        },
        async: false,
        ip_pool: 'Main Pool',
        send_at: 'example send_at'
      }
]
