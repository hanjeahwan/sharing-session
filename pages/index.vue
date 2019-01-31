<template>
  <div class="container my-5">
    <div class="mb-5">
        <h5 class="font-weight-bold text-primary mb-4">1. SASS Function (@mixin, @content, @each)</h5>
        <div class="mb-4">
            <h6 class="font-weight-bold">Default Style</h6>
            <el-popover placement="right" width="250">
                <el-button class="mb-2"  slot="reference" plain>Click</el-button>
              <div>
                Complete this form and proceed to the next steps. Recruiters will refer to the information that you’ve filled in to create the job post.
              </div>
            </el-popover>
        </div>
        <div class="mb-4">
            <h6 class="font-weight-bold">Custom Style (popper-class="el-popover-demo")</h6>
            <el-popover popper-class="el-popover-demo" placement="right" width="250">
                <el-button class="mb-2" slot="reference" plain>Click</el-button>
              <div>
                Complete this form and proceed to the next steps. Recruiters will refer to the information that you’ve filled in to create the job post.
              </div>
            </el-popover>
        </div>
        <div class="mb-4">
            <h6 class="font-weight-bold">Custom Style With Themes Color</h6>
            <el-popover popper-class="el-popover-demo-purple-accent" placement="right" width="250">
                <el-button class="mb-2" slot="reference" plain>Purple Accent (Talentcloud Theme Color)</el-button>
              <div>
                Complete this form and proceed to the next steps. Recruiters will refer to the information that you’ve filled in to create the job post.
              </div>
            </el-popover>
            <el-popover popper-class="el-popover-demo-success" placement="right" width="250">
                <el-button class="mb-2" slot="reference" plain>Success (Bootstrap Theme Color)</el-button>
              <div>
                Complete this form and proceed to the next steps. Recruiters will refer to the information that you’ve filled in to create the job post.
              </div>
            </el-popover>
            <el-popover popper-class="el-popover-demo-black" placement="right" width="250">
                <el-button class="mb-2" slot="reference" plain>Black (Custom Color)</el-button>
              <div>
                Complete this form and proceed to the next steps. Recruiters will refer to the information that you’ve filled in to create the job post.
              </div>
            </el-popover>
        </div>
    </div>
    <div class="mb-5">
        <h5 class="font-weight-bold text-primary mb-4">2. Bootstrap Breakpoint Function and (@at-root, placeholders)</h5>
        <div class="mb-4">
            <h6 class="font-weight-bold">Responsive Minimum Width (min-w-2, min-w-md-3, min-w-lg-5)</h6>
            <div>
                <div class="demo-item min-w-2 min-w-md-3 min-w-lg-5" v-for="n in 10">{{n}}</div>
            </div>
        </div>
        <div class="mb-4">
            <h6 class="font-weight-bold">@at-root</h6>
            <div>
                <div class="demo-item min-w-2 min-w-md-4" v-for="n in 10">
                    <div class="demo-item-header">
                        header
                    </div>
                    <div class="demo-item-content">
                        content
                    </div>
                    <div class="demo-item-footer">
                        footer
                    </div>
                </div>
            </div>
        </div>
        <div class="mb-4">
            <h6 class="font-weight-bold">Placeholders (min-w-2, min-w-md-3, min-w-lg-5)</h6>
            <div>
                <div class="demo-element min-w-2 min-w-md-3 min-w-lg-5" v-for="n in 10">{{n}}</div>
            </div>
        </div>
    </div>
    <div class="mb-5">
        <h5 class="font-weight-bold text-primary mb-4">2. If...Else Statement</h5>
        <div class="mb-4">
            <h6 class="font-weight-bold">Button Size (small, default, large)</h6>
            <div>
                <button class="demo-button-small">small</button>
                <button class="demo-button">default</button>
                <button class="demo-button-large">large</button>
            </div>
        </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
    }
  }
}

</script>
<style lang='scss' src="@/case/loop/optimize.scss"></style>
<style lang='scss' src="@/case/responsive/optimize.scss"></style>
<style lang='scss' src="@/case/if-else/optimize.scss"></style>
