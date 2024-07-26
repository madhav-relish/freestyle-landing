export const apiCodeSnippets = [
    {
      tabName: "Database",
      heading: "TypeScript is The Database",
      description: "Put @cloudstate on any class and it's properties will be stored forever and available in any request.",
      code: `@cloudstate
        class CloudEmailList {
          emails: string[] = [];
          add(email: string) {
            this.emails.push(email);
          }
          list() {
            return this.emails;
          }
        }
      `
    },
    {
      tabName: "Blob Storage",
      heading: "Blob Storage",
      description: "Store blobs on classes just like any other data.",
      code: `@cloudstate
        class MyBlobs {
          blobs: Blob[] = [];
          add(blob: Blob) {
            this.blobs.push(blob);
          }
        }
      `
    },
    {
      tabName: "RPC Layer",
      heading: "RPC Layer",
      description: "No need to build a REST API. Just call functions on your frontend with useCloud. Create root level classes with static ids and instances with dynamic ids.",
      code: `@cloudstate
        class GreeterCS {
          static id = "your-class";
          // or id = crypto.randomUUID();
          greet() {
            return "hello world";
          }
        }
  
        useCloud<typeof GreeterCS>("your-class").greet();
      `
    },
    {
      tabName: "Signals",
      heading: "Full Stack Signals",
      description: "Methods are effects. You'll be notified when their dependencies have changed allowing you to recall them as you see fit to implement complex realtime systems.",
      code: `@cloudstate
        class YourClass {
          @signal count = 0;
          getCount() {
            return this.count;
          }
        }
  
        const counter = useCloud<typeof YourClass>("<instance-id>");
        for await (const getCount of counter.getCount) {
          console.log(await getCount());
        }
      `
    },
    {
      tabName: "Streams",
      heading: "Streaming Data",
      description: "Leverage signals and async iterators to create efficient realtime streams.",
      code: `@cloudstate
        class YourClass {
          // ...
          async *countStream() {
            const counter = useSignal<typeof YourClass>(this.id);
            for await (getCount of counter.getCount) {
              yield await getCount();
            }
          }
        }
  
        const counter = useCloud<typeof YourClass>("<instance-id>");
        for await (const count of counter.countStream()) {
          console.log(count);
        }
      `
    }
  ];
  
  export const infrastructureCodeSnippet = [
    {
      tabName: "Authentication",
      heading: "Authentication",
      description: "Instead of using an auth provider like Auth0, you can use our open source freestyle-auth package.",
      code: `
        import { PasskeyAuthentication } from "freestyle-auth";
  
        @cloudstate
        class AuthenticationCS extends PasskeyAuthentication {
          static id = "auth" as const;
  
          override _createUser() {
            return new UserCS(crypto.randomUUID(), "", "");
          }
        }
  
        @cloudstate
        export class UserCS {
          constructor(
            public id: string,
            public username: string,
            public image: ImageCS,
            public displayName?: string
          ) {}
  
          _assertSelf() {
            const auth = useLocal(AuthenticationCS);
            const user = auth.getCurrentUser();
            if (user !== this) throw new Error("You do not have permission for this operation.");
          }
  
          setDisplayName(displayName: string) {
            this._assertSelf();
            this.displayName = displayName;
          }
        }
  
        import { PasskeyAuthenticationModal } from "freestyle-auth/react";
  
        export function SignInPage() {
          const auth = useCloud<typeof AuthenticationCS>("auth");
          return (
            <PasskeyAuthenticationModal
              auth={auth}
              onSignedIn={() => {
                window.location.href = "/dashboard";
              }}
            />
          );
        }
      `
    },
    {
      tabName: "Chatbot",
      heading: "Chatbot",
      description: "With freestyle-chat you can build a full stack chatbot experience with very minimal code.",
      code: `
        import { ChatCS } from "freestyle-chat";
  
        @cloudstate
        export class ChatbotCS extends ChatCS {
          static id = "chatbot";
  
          override getCurrentUser(): BaseUserCS {
            const user = useLocal(AuthenticationCS).getCurrentUser();
            return user;
          }
  
          override async _onMessageReceived(message) {
            const openai = new OpenAI();
  
            super._startTyping(SERVER_USER);
            const response = await openai.chat.completions.create({
              model: "gpt-3.5-turbo",
              messages: [this.messages],
            });
            super._endTyping(SERVER_USER);
            super._sendTextMessage({ text: response.text }, SERVER_USER);
          }
        }
      `
    }
  ];
  