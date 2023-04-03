# 培训APP仿写

技术栈
vue2.0 mocker vue-router

碰到问题:Duplicate keys detected: '0'. This may cause an update error’
翻译成中文意思是检测到有重复的键值'0'，可能会导致更新错误。

原代码
```html
    <li
        v-for="(item, index) in time"
        :key="index"
        class="component-details"
        >
        <div class="classity-contant">
            <h1>{{ learn }}</h1>
        </div>
        <span class="time">{{ index }}</span>
        <span class="mintues">{{ mintues }}</span>
        </li>
        <li
        v-for="(item, index) in time"
        :key="index"
        class="component-details"
        >
        <div class="classity-contant">
            <h1>{{ long }}</h1>
        </div>
        <span class="time">{{ index }}</span>
        <span class="mintues">{{ mintues }}</span>
    </li>
   
```

更改后的
```html
    <li
    v-for="(item, index) in time"
    :key="'card-' + index"
    class="component-details"
    >
        <div class="classity-contant">
            <h1>{{ long }}</h1>
        </div>
        <span class="time">{{ index }}</span>
        <span class="mintues">{{ mintues }}</span>
    </li>
```
