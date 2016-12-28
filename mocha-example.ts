import {assert} from "chai";
import {hello1} from "lib1";
import {hello2} from "lib2/hello2";
import {hello3} from "hello3/lib3";

describe('index', function () {
    it('should work', () => {
        hello1();
        hello2();
        hello3();
        assert.isOk({});
    })
});
