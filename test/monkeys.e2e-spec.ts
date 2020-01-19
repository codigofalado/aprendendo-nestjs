import { Test, TestingModule } from "@nestjs/testing";
import { INestApplication } from "@nestjs/common";
import * as request from "supertest";
import { MonkeysModule } from "../src/monkeys/monkeys.module";

describe("Monkeys (e2e)", () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [MonkeysModule]
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it("/monkeys (GET)", () => {
    return request(app.getHttpServer())
      .get("/monkeys")
      .expect(200)
      .expect("<h1>Hello 🐵, usuários</h1>");
  });

  it("/monkeys?nome=fernando (GET)", () => {
    return request(app.getHttpServer())
      .get("/monkeys?nome=fernando")
      .expect(200)
      .expect("<h1>Hello 🐵, fernando</h1>");
  });

  it("/monkeys/code-monkeys/fernando (GET)", () => {
    return request(app.getHttpServer())
      .get("/monkeys/code-monkey/fernando")
      .expect(200)
      .expect("<h1>Você é Code Monkey, 🐵 fernando</h1>");
  });

  it("/monkeys/natal (GET)", () => {
    return request(app.getHttpServer())
      .get("/monkeys/natal")
      .expect(200)
      .expect(new RegExp("\\bNatal\\b"));
  });
});
